// 旅行データ（写真複数枚対応）
const travelData = [
  {
    day: '1日目',
    places: [
      {
        title: 'サンフランシスコ空港 (SFO)',
        lat: 37.6156445,
        lng: -122.3974825,
        photos: ['photos/sfo1.jpg', 'photos/sfo2.jpg'],
        text: 'ついにアメリカへ到着！空港が広い。',
      },
      {
        title: 'メタ・ストア (Meta Store)',
        lat: 37.590163,
        lng: -122.3361708,
        photos: ['photos/meta1.jpg'],
        text: 'MetaのBurlingameキャンパスにあるストア。最新のQuestを体験。',
      },
      {
        title: 'ツイン・ピークス',
        lat: 37.752915,
        lng: -122.447413,
        photos: ['photos/twinpeaks.jpg'],
        text: 'サンフランシスコの街を一望できる絶景スポット。',
      },
      {
        title: 'ゴールデンゲートブリッジ',
        lat: 37.807785,
        lng: -122.4958,
        photos: ['photos/ggbridge.jpg'],
        text: '霧がかかっていなくてよかった！赤が映える。',
      },
      {
        title: 'Embassy Suites Santa Clara Silicon Valley',
        lat: 37.3840039,
        lng: -121.9786634,
        photos: ['photos/hotel1.jpg'],
        text: 'シリコンバレーの中心地にあるホテルにチェックイン。',
      },
    ],
  },
  {
    day: '2日目',
    places: [
      {
        title: 'インテル・ミュージアム',
        lat: 37.38743,
        lng: -121.963446,
        photos: ['photos/intel.jpg'],
        text: '半導体の歴史を学ぶ。シリコンウェハーが綺麗。',
      },
      {
        title: 'Apple Park Visitor Center',
        lat: 37.332889,
        lng: -122.008216,
        photos: ['photos/apple1.jpg', 'photos/apple2.jpg'],
        text: 'Appleの建築、洗練されていて最高。限定グッズもチェック。',
      },
      {
        title: 'コンピュータ・ヒストリ・ミュージアム',
        lat: 37.414324,
        lng: -122.077507,
        photos: ['photos/chm.jpg'],
        text: 'ITの歴史が全てここにある。古いコンピュータが沢山。',
      },
      {
        title: 'グーグル・ストア',
        lat: 37.42151,
        lng: -122.080552,
        photos: ['photos/google.jpg'],
        text: 'Google本社エリア。ドロイド君と記念撮影。',
      },
      {
        title: 'グーグル・ビジター・エクスペリエンス',
        lat: 37.421564,
        lng: -122.080432,
        photos: ['photos/google.jpg'],
        text: 'Google本社エリア。ドロイド君と記念撮影。',
      },
      {
        title: 'グーグル・カフェ',
        lat: 37.421335,
        lng: -122.080467,
        photos: ['photos/google.jpg'],
        text: 'Google本社エリア。ドロイド君と記念撮影。',
      },
      {
        title: 'テクノロジー・セミナー',
        lat: 37.400781,
        lng: -122.097799,
        photos: ['photos/mvcc.jpg'],
        text: 'アメリカで活躍するプロフェッショナルからの講義',
      },
    ],
  },
  {
    day: '3日目',
    places: [
      {
        title: 'ピクサースタジオゲート',
        lat: 37.832657,
        lng: -122.284085,
        photos: ['photos/pixar.jpg'],
        text: '有名なピクサーの正門前で記念撮影。',
      },
      {
        title: 'オートデスク・ギャラリー',
        lat: 37.79371,
        lng: -122.394734,
        photos: ['photos/autodesk.jpg'],
        text: '3Dデザインとエンジニアリングの最先端。',
      },
      {
        title: 'フィッシャーマンズ・ワーフ / ピア39',
        lat: 37.801617,
        lng: -122.419452,
        photos: ['photos/pier39.jpg'],
        text: 'アシカがたくさんいた！クラムチャウダーも食べた。',
      },
      {
        title: 'ピア39',
        lat: 37.808594,
        lng: -122.410619,
        photos: ['photos/pier39.jpg'],
        text: 'アシカがたくさんいた！クラムチャウダーも食べた。',
      },
      {
        title: 'トンネルトップパーク',
        lat: 37.752302,
        lng: -122.392953,
        photos: ['photos/tunneltops.jpg'],
        text: 'ゴールデンゲートブリッジが見える新しい公園。',
      },
      {
        title: 'ウォルト・ディズニー・ファミリー・ミュージアム',
        lat: 37.801223,
        lng: -122.458768,
        photos: ['photos/wdfm.jpg'],
        text: 'ウォルト・ディズニーの生涯を知る博物館。',
      },
      {
        title: 'SpringHill Suites by Marriott Modesto',
        lat: 37.664621,
        lng: -121.029152,
        photos: ['photos/hotel_modesto.jpg'],
        text: 'ヨセミテのホテル。',
      },
    ],
  },
  {
    day: '4日目',
    places: [
      {
        title: 'ヨセミテ国立公園',
        lat: 37.851471,
        lng: -120.210515,
        photos: ['photos/yosemite1.jpg'],
        text: '大自然！空気が全然違う。',
      },
      {
        title: 'ヨセミテバレー',
        lat: 37.74365,
        lng: -119.592996,
        photos: ['photos/yosemite_valley.jpg'],
        text: 'ハーフドームやエル・キャピタンの迫力がすごい。',
      },
    ],
  },
  {
    day: '5日目',
    places: [
      {
        title: 'サンタモニカ・ビーチ',
        lat: 34.010474,
        lng: -118.496903,
        photos: ['photos/santamonica.jpg'],
        text: 'ルート66の終点。西海岸のビーチの雰囲気。',
      },
      {
        title: 'Residence Inn Los Angeles Torrance',
        lat: 33.838553,
        lng: -118.352186,
        photos: ['photos/hotel_torrance.jpg'],
        text: 'ロサンゼルスの拠点ホテルに到着。',
      },
    ],
  },
  {
    day: '6日目',
    places: [
      {
        title: 'オーティス・カレッジ・オブ・アート&デザイン',
        lat: 33.95673,
        lng: -118.419646,
        photos: ['photos/otis.jpg'],
        text: '名門アートスクールのキャンパス見学。',
      },
      {
        title: 'トレーダー・ジョーズ (Torrance)',
        lat: 33.887628,
        lng: -118.380967,
        photos: ['photos/traderjoes.jpg'],
        text: 'お土産のエコバッグやお菓子を購入。',
      },
      {
        title: 'コミック・バグ (The Comic Bug)',
        lat: 33.887628,
        lng: -118.380967,
        photos: ['photos/comicbug.jpg'],
        text: 'アメリカのコミックショップの雰囲気を楽しむ。',
      },
    ],
  },
  {
    day: '7日目',
    places: [
      {
        title: 'Creature Effects, Inc.',
        lat: 34.130549,
        lng: -118.351084,
        photos: ['photos/creature.jpg'],
        text: '映画の特殊メイクやアニマトロニクスの現場。',
      },
      {
        title: 'Hype Studios',
        lat: 34.08732,
        lng: -118.260498,
        photos: ['photos/hype.jpg'],
        text: 'クリエイティブスタジオを見学。',
      },
      {
        title: 'グランドセントラル・マーケット',
        lat: 34.051223,
        lng: -118.249082,
        photos: ['photos/gcm.jpg'],
        text: 'LAの台所。多国籍な料理がたくさん。',
      },
      {
        title: 'ロサンゼルスダウンタウン',
        lat: 34.040396,
        lng: -118.264487,
        photos: ['photos/gcm.jpg'],
        text: 'ロサンゼルスダウンタウン観光',
      },

      {
        title: 'カリフォルニア・サイエンス・センター',
        lat: 34.015564,
        lng: -118.288692,
        photos: ['photos/science_center.jpg'],
        text: 'スペースシャトル・エンデバーの実機展示に感動。',
      },
      {
        title: 'ハリウッド観光 (Walk of Fame)',
        lat: 34.094462,
        lng: -118.345668,
        photos: ['photos/hollywood.jpg'],
        text: '有名な星型のプレートを探して散策。',
      },
    ],
  },
  {
    day: '8日目',
    places: [
      {
        title: 'カリフォルニア・ディズニーランド・リゾート',
        lat: 33.809855,
        lng: -117.923377,
        photos: ['photos/disney1.jpg', 'photos/disney2.jpg'],
        text: '元祖ディズニーランド！一日中遊び倒す。',
      },
    ],
  },
  {
    day: '9日目',
    places: [
      {
        title: 'ロサンゼルス国際空港 (LAX)',
        lat: 33.943262,
        lng: -118.404346,
        photos: ['photos/lax.jpg'],
        text: '楽しかった研修旅行も終わり。日本へ帰国。',
      },
    ],
  },
];

// Leaflet マップ初期化
const map = L.map('map').setView([36.3, -120.0], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
}).addTo(map);

const markers = [];

// マーカー生成
travelData.forEach((day) => {
  day.places.forEach((place) => {
    const marker = L.marker([place.lat, place.lng]).addTo(map);

    const photosHTML = place.photos
      .map((p) => `<img src="${p}" class="popup-img">`)
      .join('');

    marker.bindPopup(`
<strong>${place.title}</strong><br>
<p>${place.text}</p>
${photosHTML}
`);

    markers.push({ title: place.title, marker });
  });
});

// サイドバー生成
const listDiv = document.getElementById('placeList');

travelData.forEach((day) => {
  const dayEl = document.createElement('div');
  dayEl.className = 'day-title';
  dayEl.textContent = day.day;
  listDiv.appendChild(dayEl);

  day.places.forEach((place) => {
    const item = document.createElement('div');
    item.className = 'place-item';
    item.textContent = place.title;

    item.onclick = () => {
      const found = markers.find((m) => m.title === place.title);
      if (found) {
        map.setView(found.marker.getLatLng(), 13);
        found.marker.openPopup();
      }
    };

    listDiv.appendChild(item);
  });
});
