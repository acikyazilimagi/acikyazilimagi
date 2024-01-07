import path from "path";
import fs from "fs/promises";
import { globby } from "globby";
import grayMatter from "gray-matter";

const getSlugFromPathname = (pathname) =>
  path.basename(pathname, path.extname(pathname));

const indexDirectory = async (index, dir, category) => {
  const contentFilePaths = await globby([
    `${dir}/*.md`,
    `${dir}/*.mdx`,
    `${dir}/*.mdoc`,
  ]);

  if (contentFilePaths.length === 0) {
    return;
  }

  const files = contentFilePaths.map(async (filePath) =>
    await fs.readFile(filePath, "utf8")
  );

  let i = 0;
  for await (let file of files) {
    const { data: { title, description, tags }, content } = grayMatter(file);
    index.push({
      slug: getSlugFromPathname(contentFilePaths[i]),
      category: category,
      title,
      description,
      tags,
      body: content,
    });
    i++;
  }
};

const main = async () => {
  // prepare the dirs
  const srcDir = path.join(process.cwd(), "src");
  const publicDir = path.join(process.cwd(), "public");

  const indexFile = path.join(publicDir, "search-index.json");
  const index = [];

  // index articles
  await indexDirectory(
    index,
    path.join(srcDir, "content/articles"),
    "article",
  );

  // index projects
  await indexDirectory(
    index,
    path.join(srcDir, "content/projects"),
    "project",
  );

  await fs.writeFile(indexFile, JSON.stringify(index));
  console.log(
    `Indexed ${index.length} documents to ${indexFile}`,
  );
};

main();
