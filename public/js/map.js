const map = L.map('map').setView([41.0082, 28.9784], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const historicPlaces = [
{
    name: "Ayasofya",
    latLng: [41.008333, 28.98],
    imageUrl: "/images/moonasofya.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Ayasofya"
},
{
  name: "Kız Kulesi",
  latLng: [41.021111, 29.004167],
  imageUrl: "/images/istanbul2.jpg",
  infoUrl: "https://tr.wikipedia.org/wiki/K%C4%B1z_Kulesi"
},
{
    name: "Topkapı Sarayı",
    latLng: [41.013056, 28.983889],
    imageUrl: "/images/topkapı-palace.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Topkap%C4%B1_Saray%C4%B1"
},
{
    name: "Sultanahmet Camii",
    latLng: [41.005278, 28.976944],
    imageUrl: "/images/sultanahmet-camii.webp",
    infoUrl: "https://tr.wikipedia.org/wiki/Sultanahmet_Camii"
},
{
    name: "Yerebatan Sarnıcı",
    latLng: [41.008333, 28.978056],
    imageUrl: "/images/yerebatan-sarnici.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Yerebatan_Sarn%C4%B1c%C4%B1"
},
{
    name: "Kapalı Çarşı",
    latLng: [41.010556, 28.968056],
    imageUrl: "/images/kapali-carsi.webp",
    infoUrl: "https://tr.wikipedia.org/wiki/Kapal%C4%B1%C3%A7ar%C5%9F%C4%B1"
},
{
    name: "Dolmabahçe Sarayı",
    latLng: [41.039444, 29.001667],
    imageUrl: "/images/dolmabahce-palace.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Dolmabah%C3%A7e_Saray%C4%B1"
},
{
    name: "Süleymaniye Camii",
    latLng: [41.016111, 28.963889],
    imageUrl: "/images/suleymaniye-camii.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/S%C3%BCleymaniye_Camii"
},
{
    name: "Rumeli Hisarı",
    latLng: [41.084722, 29.056111],
    imageUrl: "/images/rumeli.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Rumeli_Hisar%C4%B1"
},
{
    name: "Pierre Loti Tepesi",
    latLng: [41.054405, 28.934395],
    imageUrl: "/images/pierre-loti.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Pierre_Loti_Tepesi"
},
{
    name: "Galata Kulesi",
    latLng: [41.025556, 28.974167],
    imageUrl: "/images/galata-kulesi.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Galata_Kulesi"
},
{
    name: "İstanbul Arkeoloji Müzeleri",
    latLng: [41.011667, 28.981389],
    imageUrl: "/images/istanbul-arkeoloji-muzeleri.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/%C4%B0stanbul_Arkeoloji_M%C3%BCzeleri"
  },
  {
    name: "Türk ve İslam Eserleri Müzesi",
    latLng: [41.006389, 28.974444],
    imageUrl: "/images/turk-ve-islam-eserleri-muzesi.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/T%C3%BCrk_ve_%C4%B0slam_Eserleri_M%C3%BCzesi"
  },
  {
    name: "İstanbul Modern Sanat Müzesi",
    latLng: [41.026111, 28.983056],
    imageUrl: "/images/istanbul-modern-sanat-muzesi.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/%C4%B0stanbul_Modern"
  },
  {
    name: "Pera Müzesi",
    latLng: [41.031944, 28.975278],
    imageUrl: "/images/pera-muzesi.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Pera_M%C3%BCzesi"
  },
  {
    name: "Rahmi M. Koç Müzesi",
    latLng: [41.0423, 28.9482],
    imageUrl: "/images/rahmi-m-koc-muzesi.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Rahmi_M._Ko%C3%A7_M%C3%BCzesi"
  },
  {
    name: "Oyuncak Müzesi",
    latLng: [40.975833, 29.070833],
    imageUrl: "/images/oyuncak-muzesi.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/%C4%B0stanbul_Oyuncak_M%C3%BCzesi"
  },
  {
    name: "Boğaz Turu",
    latLng: [41.119444, 29.075278],
    imageUrl: "/images/bogaz-turu.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/%C4%B0stanbul_Bo%C4%9Faz%C4%B1"
  },
  {
    name: "Prens Adaları",
    latLng: [40.880278, 29.095],
    imageUrl: "/images/prens-adalari.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Adalar"
  },
  {
    name: "Emirgan Korusu",
    latLng: [41.108333, 29.0525],
    imageUrl: "/images/emirgan-korusu.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Emirg%C3%A2n_Korusu"
  },
  {
    name: "Yıldız Parkı",
    latLng: [41.0483, 29.0156],
    imageUrl: "/images/yildiz-parki.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Y%C4%B1ld%C4%B1z_Park%C4%B1"
  },
  {
    name: "Gülhane Parkı",
    latLng: [41.012222, 28.98],
    imageUrl: "/images/gulhane-parki.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/G%C3%BClhane_Park%C4%B1"
  },
  {
    name: "Belgrad Ormanı",
    latLng: [41.194722, 28.951389],
    imageUrl: "/images/belgrad-ormani.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Belgrad_Orman%C4%B1"
  },

  {
    name: "RAMS Park(Galatasaray)",
    latLng: [41.103333, 28.991111],
    imageUrl: "/images/rams-park.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Ali_Sami_Yen_Spor_Kompleksi"
  },
  {
    name: "Tüpraş Stadyumu(Beşiktaş)",
    latLng: [41.039167, 28.994167],
    imageUrl: "/images/tupras.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Be%C5%9Fikta%C5%9F_Park"
  },
  {
    name: "Şükrü Saraçoğlu Stadyumu(Fenerbahçe)",
    latLng: [40.9875, 29.036667],
    imageUrl: "/images/fenerstad.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Fenerbah%C3%A7e_%C5%9E%C3%BCkr%C3%BC_Saraco%C4%9Flu_Stadyumu"
  },
  {
    name: "Atatürk Olimpiyat Stadyumu",
    latLng: [41.074444, 28.765833],
    imageUrl: "/images/olimpiyat.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Atat%C3%BCrk_Olimpiyat_Stadyumu"
  },
  {
    name: "Fatih Terim Stadyumu(Başakşehir)",
    latLng: [41.122778, 28.808611],
    imageUrl: "/images/fatihterimstad.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Ba%C5%9Fak%C5%9Fehir_Fatih_Terim_Stadyumu"
  },
  {
    name: "Boğaziçi Üniversitesi",
    latLng: [41.083545, 29.052521],
    imageUrl: "/images/bogazici.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Bo%C4%9Fazi%C3%A7i_%C3%9Cniversitesi"
  },
  {
    name: "İstanbul Teknik Üniversitesi",
    latLng: [41.10548, 29.02365],
    imageUrl: "/images/itu.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/%C4%B0stanbul_Teknik_%C3%9Cniversitesi"
  },
  {
    name: "Marmara Üniversitesi (Göztepe Kampüsü) ",
    latLng: [40.982500, 29.032222],
    imageUrl: "/images/marmara.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Marmara_%C3%9Cniversitesi"
  },
  {
    name: "Yıldız Teknik Üniversitesi",
    latLng: [41.05, 29.01],
    imageUrl: "/images/yıldızteknik.jpg",
    infoUrl: "https://tr.wikipedia.org/wiki/Y%C4%B1ld%C4%B1z_Teknik_%C3%9Cniversitesi"
  }
];

historicPlaces.forEach(place => {
    const marker = L.marker(place.latLng).addTo(map);
    marker.bindPopup(`
        <div>
            <h3>${place.name}</h3>
            <img src="${place.imageUrl}" alt="${place.name}" style="width:100px; height:auto;">
            <br>
            <a href="${place.infoUrl}" target="_blank">Daha Fazla Bilgi</a>
        </div>
    `);
});
