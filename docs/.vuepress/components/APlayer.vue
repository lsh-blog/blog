<template>
  <!--<div id="aplayer"></div>-->
  <div v-once>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
    <script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
    <!-- require MetingJS -->
    <script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>
    <meting-js v-pre
               id="meting-js"
               fixed="true"
               mini="true"
               auto="https://y.qq.com/n/yqq/playlist/2949360967.html"
    >
      <!--auto="https://music.163.com/#/discover/toplist?id=3778678"-->

    </meting-js>
  </div>
</template>

<script>
  // import 'APlayer/dist/APlayer.min.css';
  // import APlayer from 'APlayer';
  export default {
    name: "APlayer",
    data() {
      return {}
    },
    mounted() {
      // import('APlayer').then(module => {
      //     const ap = new module.default({
      //         container: document.getElementById('aplayer'),
      //         mini: false,
      //         fixed: true,
      //         autoplay: false,
      //         theme: '#FADFA3',
      //         loop: 'all',
      //         order: 'random',
      //         preload: 'auto',
      //         volume: 0.7,
      //         mutex: true,
      //         listFolded: true,
      //         listMaxHeight: 90,
      //         lrcType: 3,
      //         audio: [
      //             {
      //                 name: 'トリカゴ',
      //                 artist: 'XX:me',
      //                 url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
      //                 cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.jpg',
      //                 lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.lrc',
      //                 theme: '#ebd0c2'
      //             },
      //             {
      //                 name: '光るなら',
      //                 artist: 'Goose house',
      //                 url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.mp3',
      //                 cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
      //                 lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.lrc',
      //                 theme: '#46718b'
      //             },
      //             {
      //                 name: '你的名字',
      //                 artist: 'RADWIMPS',
      //                 url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3',
      //                 cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg',
      //                 lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.lrc',
      //                 theme: '#46718b'
      //             },
      //             {
      //                 name: 'BRAND NEW WORLD',
      //                 artist: '海贼王',
      //                 // url: '/music/D-51 - BRAND NEW WORLD [mqms2].mp3',
      //                 url: '/music/D-51 - BRAND NEW WORLD [mqms2].mp3',
      //                 cover: 'https://y.gtimg.cn/music/photo/album/10/180_albumpic_992710_0.jpg?n=1',
      //                 lrc: '/music/lrc/D-51 - BRAND NEW WORLD - 258 - ONE PIECE SUPER BEST (海贼王主题曲集)_qm.qrc',
      //                 theme: '#46718b'
      //             },
      //             {
      //                 name: '動天',
      //                 artist: '高梨康治&刃-yaiba-',
      //                 url: '/music/高梨康治 (たかなし やすはる) _ 刃-yaiba- (ヤイバ) - 形勢逆転.mp3',
      //                 cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003xst1Y138xyW.jpg?max_age=2592000',
      //                 lrc: '/music/lrc/高梨康治 (たかなし やすはる) - 動天 - 183 - NARUTO-ナルト-疾風伝 オリジナル・サウンドトラック (火影忍者疾风传OST1)_qm.lrc',
      //                 theme: '#46718b'
      //             }
      //         ]
      //     });
      // })

    }
  }
</script>

<style scoped>
  .aplayer-info {
    display: block !important;
  }
</style>
