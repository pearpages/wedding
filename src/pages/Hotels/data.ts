import chaletDelGolf from "./images/CHALET-DEL-GOLF.jpg";
import hotelFontanals from "./images/HOTEL-FONTANALS-GOLF.jpeg";
import hotelRoca from "./images/HOTEL-ROCA-ALP.jpg";
import hotelTerminus from "./images/HOTEL-TERMINUS.jpg";
import hotelViaPaulita from "./images/HOTEL-VILLA-PAULITA.jpg";
import puigcerdaPark from "./images/PUIGCERDA-PARK-HOTEL.jpg";

export interface Hotel {
  name: string;
  stars: number;
  address: string;
  booking: string;
  price: number;
  image: string;
}

export const hotels: Hotel[] = [
  {
    name: "El Chalet del Golf",
    stars: 4,
    address: "Devesa del Golf, s/n, 17539 Bolvir",
    booking:
      "https://www.booking.com/hotel/es/hesperia-chalet-del-golf.es.html?aid=376371;label=es-JCB2UqznXtCO_RDP_nj5CAS410545262609%3Apl%3Ata%3Ap1%3Ap22.655.000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp20270%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ye8F2ouj63ytkBtrYs5TAfs;sid=9c24ec2c0de6b949253016a91027974e;all_sr_blocks=9698219_167362902_0_42_0;checkin=2020-09-10;checkout=2020-09-13;dest_id=3253;dest_type=region;dist=0;group_adults=2;group_children=0;hapos=7;highlighted_blocks=9698219_167362902_0_42_0;hpos=7;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=9698219_167362902_0_42_0__25328;srepoch=1583348806;srpvid=7e438663246f041f;type=total;ucfs=1&#hotelTmpl",
    price: 2,
    image: chaletDelGolf
  },
  {
    name: "Puigcerda Park Hotel",
    stars: 3,
    address: "Carretera Nacional 260, km 179, 17520 Puigcerdà",
    booking:
      "https://www.booking.com/hotel/es/puigcerda-park.es.html?aid=376371;label=es-JCB2UqznXtCO_RDP_nj5CAS410545262609%3Apl%3Ata%3Ap1%3Ap22.655.000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp20270%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ye8F2ouj63ytkBtrYs5TAfs;sid=9c24ec2c0de6b949253016a91027974e;atlas_src=sr_iw_btn;checkin=2020-09-10;checkout=2020-09-13;dest_id=3253;dest_type=region;dist=0;group_adults=2;group_children=0;highlighted_blocks=1965002_209027109_2_1_0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&",
    price: 2,
    image: puigcerdaPark
  },
  {
    name: "Hotel Fontanals Golf",
    stars: 4,
    address: "Fontanals, 2, 17538 Soriguerola",
    booking:
      "https://www.booking.com/hotel/es/hotelfontanalsgolf.es.html?aid=376371;label=es-JCB2UqznXtCO_RDP_nj5CAS410545262609%3Apl%3Ata%3Ap1%3Ap22.655.000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp20270%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ye8F2ouj63ytkBtrYs5TAfs;sid=9c24ec2c0de6b949253016a91027974e;atlas_src=sr_iw_btn;checkin=2020-09-10;checkout=2020-09-13;dest_id=3253;dest_type=region;dist=0;group_adults=2;group_children=0;highlighted_blocks=9186613_216939832_2_2_0;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&",
    price: 2,
    image: hotelFontanals
  },
  {
    name: "Hotel Terminus",
    stars: 2,
    address: "Plaza Estación, 17520 Puigcerdà",
    booking:
      "https://www.booking.com/hotel/es/terminus.es.html?aid=376371;label=es-JCB2UqznXtCO_RDP_nj5CAS410545262609%3Apl%3Ata%3Ap1%3Ap22.655.000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp20270%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ye8F2ouj63ytkBtrYs5TAfs;sid=9c24ec2c0de6b949253016a91027974e;atlas_src=sr_iw_btn;checkin=2020-09-10;checkout=2020-09-13;dest_id=3253;dest_type=region;dist=0;group_adults=2;group_children=0;highlighted_blocks=1204101_149661531_2_0_0;nflt=pri%3D2%3B;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&",
    price: 2,
    image: hotelTerminus
  },
  {
    name: "Hotel Roca",
    stars: 2,
    address: "Travessia de la Font, 2, 17538 Alp",
    booking:
      "https://www.booking.com/hotel/es/roca-alp.es.html?aid=376371;label=es-JCB2UqznXtCO_RDP_nj5CAS410545262609%3Apl%3Ata%3Ap1%3Ap22.655.000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp20270%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ye8F2ouj63ytkBtrYs5TAfs;sid=9c24ec2c0de6b949253016a91027974e;atlas_src=sr_iw_title;checkin=2020-09-10;checkout=2020-09-13;dest_id=3253;dest_type=region;dist=0;group_adults=2;group_children=0;highlighted_blocks=1853701_199626979_2_1_0;nflt=pri%3D2%3B;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&",
    price: 2,
    image: hotelRoca
  },
  {
    name: "Hotel Villa Paulita",
    stars: 4,
    address: "Avenida Pons i Gash, 15, 17520 Puigcerdà",
    booking:
      "https://www.booking.com/hotel/es/hospes-villa-paulita.es.html?aid=376371;label=es-JCB2UqznXtCO_RDP_nj5CAS410545262609%3Apl%3Ata%3Ap1%3Ap22.655.000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp20270%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ye8F2ouj63ytkBtrYs5TAfs;sid=9c24ec2c0de6b949253016a91027974e;atlas_src=sr_iw_btn;checkin=2020-09-10;checkout=2020-09-13;dest_id=3253;dest_type=region;dist=0;group_adults=2;group_children=0;highlighted_blocks=9470117_88494127_2_2_0;nflt=ht_id%3D204%3B;no_rooms=1;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&#_",
    price: 3,
    image: hotelViaPaulita
  }
];
