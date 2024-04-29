# [acikyazilimagi](https://github.com/acikyazilimagi/acikyazilimagi)

[![derleme durumu][build-image]][build-url]
[![lisans][license-image]][license-url]

## BENİ OKU

Bu kod tabanında, şu anda yapım aşamasında bulunan
[acikyazilimagi.com](https://acikyazilimagi.com)'nun önizleme sürümü yer
almaktadır.

`main` branch'ine aktarılan değişiklikler, bir dizi derleme işleminden sonra
[https://acikyazilimagi.com](https://acikyazilimagi.com) adresinde belirecektir.

## Projeyi Çalıştırmak

### Çalışma Ortamını Hazırlamak

[node.js](https://nodejs.org/) ve [pre-commit](https://pre-commit.com/)'in son
sürümlerinin sisteminizde kurulu olduğundan emin olun.

Repository'i klonlayıp, npm üzerinden bağımlılıkları çekerek çalışma ortamınızı
hazır hale getirin.

```sh
git clone https://github.com/acikyazilimagi/acikyazilimagi.git
cd acikyazilimagi
corepack up

node --run check
```

### Çalışmaya Başlamak

`node --run dev` komutu ile geliştirme modunda kod tabanına müdahale etmeye
başlayabilirsiniz. Komutu çalıştırdıktan bir süre sonra browser'ınız açılacak,
siz değişiklik yaptığınız sürece "hot reloading" sayesinde browser'daki kod
otomatik olarak güncellenecektir.

### Çalışmayı Kontrol Etmek

`pre-commit run --all-files` komutu ile yapılan geliştirmenin belirlenen
standartlara uyup uymadığını kontrol edebilirsiniz. Eğer bu kontrolü yapmazsanız
Pull Request oluşturduğunuzda GitHub tarafından bu kontroller otomatik
işletilecek ve açmış olduğunuz Pull Request'i sizden güncellemenizi
isteyecektir.

Bazı kod standartları otomatik olarak düzeltilebilmektedir, bunu sağlamak için
`node --run format` komutunu kullanabilirsiniz.

Aynı zamanda yazmış olduğunuz birim testlerini `node --test` komutu ile
başlatabilirsiniz. Testler de aynı lint işlemi gibi hem pull request hem de push
esnasında GitHub Actions tarafından CI/CD otomasyonuna bağlı olarak
çalıştırılmaktadır.

## Dizin Yapısı

| Klasör     | Açıklama                                     |
| ---------- | -------------------------------------------- |
| `/src/`    | Kaynak dosyalarını içeren klasör             |
| `/public/` | Web dizininde yer alacak tüm statik dosyalar |

## Gereksinimler

- node.js (https://nodejs.org/)
- pre-commit (https://pre-commit.com/)

## Lisans

MIT License, daha fazla detay için lütfen [LICENSE](LICENSE) dosyasını
inceleyin.

## Katkı Sağlayamak

Herhangi bir katkıya açıktır. Hata düzenlemeleri, yeni özellik ve modüller
ekleyebilirsiniz.

- Koda katkı sağlamak için: Yukarıda anlatıldığı gibi repository'i klonlayın,
  değişikliklerinizi gerçekleştirin, ve bir pull request oluşturun.
- Bir hata bildirmek için: Bir şeyler ters gidiyorsa,
  [GitHub Issues](https://github.com/acikyazilimagi/acikyazilimagi/issues)
  üzerinden yeni bir issue oluşturup bize bildirin.

[build-image]: https://github.com/acikyazilimagi/acikyazilimagi/actions/workflows/deploy.yml/badge.svg
[build-url]: https://github.com/acikyazilimagi/acikyazilimagi/actions/workflows/deploy.yml
[license-image]: https://img.shields.io/github/license/acikyazilimagi/acikyazilimagi.svg?style=flat-square
[license-url]: https://github.com/acikyazilimagi/acikyazilimagi/blob/main/LICENSE
