# Gardırop

Kullanıcının kendi kıyafetlerinden, günün etkinliğine ve havaya göre 3 kombin öneren iOS uygulaması. Tasarım kararlarının tamamı ayrı tasarım dokümanında tutulur.

## Teknoloji

- **Uygulama:** React Native + Expo (TypeScript), Expo Router
- **Backend:** Supabase (AB bölgesi): veritabanı, kimlik doğrulama, depolama, sunucu fonksiyonları
- **Analitik ve hata takibi:** PostHog, Sentry
- **Dağıtım:** EAS Build ve TestFlight

## Geliştirme ortamını kurma (Mac)

1. Node.js 22 veya üstünü ve Xcode'u kurun.
2. Bağımlılıkları yükleyin: `npm install`
3. `.env.example` dosyasını `.env` adıyla kopyalayıp değerleri doldurun.
4. Uygulamayı iPhone simülatöründe açın: `npx expo run:ios`

> Not: Uygulama, cihazdaki arka plan temizleme gibi yerel yetenekler kullanacağı için Expo Go ile değil, "development build" ile çalışır.

## Komutlar

| Komut | Açıklama |
| --- | --- |
| `npm start` | Geliştirme sunucusunu başlatır |
| `npm run ios` | iOS simülatöründe açar |
| `npm run typecheck` | TypeScript tip kontrolü |
| `npm run lint` | Kod stili kontrolü |

## Klasör yapısı

```
src/
  app/          Ekranlar (her dosya bir ekran; Expo Router)
  components/   Ortak arayüz bileşenleri
  constants/    Tema, renkler, boşluklar
  hooks/        Ortak React hook'ları
```

## Kilometre taşları

- [ ] **M0 Altyapı:** proje iskeleti, giriş, Face ID kilidi, Sentry, PostHog, TestFlight hattı
- [ ] **M1 Model seçimi:** altın test seti, Haiku ve Gemini karşılaştırması
- [ ] **M2 Gardırop:** fotoğraf ekleme, YZ etiketleme, düzeltme ekranı
- [ ] **M3 Öneri:** etkinlik seçimi, iki öneri motoru, geri bildirim ve öğrenme
- [ ] **M4 Hazırlık:** stil anketi, KVKK, hesap silme, dahili test
- [ ] **M5 Beta:** test grubuna dağıtım

## Güvenlik kuralları

- Gizli anahtarlar (`.env`, yapay zeka API anahtarları) depoya gönderilmez.
- Yapay zeka çağrıları yalnızca Supabase sunucu fonksiyonlarından yapılır; uygulamada API anahtarı bulunmaz.
