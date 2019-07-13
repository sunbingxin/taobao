<template>
    <div>
        <div>分享页</div>
        <canvas style="width: 300px; height: 490px;" canvas-id="canvas"></canvas>
    </div>
</template>

<script>
const headPhoto='https://avatars3.githubusercontent.com/u/47618159?s=40&u=0a759dd3cc291ff96c4e56fccea24dbb67e0f664&v=4';
const erWei="https://upapi.jinaup.com/static/image/QRCode.png";
export default {
    data() {
        return {
            title:"",
            centImg:"",
            pice:"",
            newPice:"",
        }
    },
  mounted() {
      var context = wx.createCanvasContext('canvas');
          context.drawImage(headPhoto, 0, 0, 40, 40,10,10,40,40)
          context.setFontSize(15)
          context.fillText("隔壁老王分享给你一个商品",60,23)
          context.fillText("邀请码:88888",60,43)
          context.save();
          context.restore();
          let that=this;
         wx.getImageInfo({
            src: that.centImg,
            complete (res) {
                //   let rx, ry, rw, rh;
                // if (res.width/res.height > 220/260){
                //     ry = 0;
                //     rh = res.height;
                //     rw = res.height/260*220;
                //     rx = (res.width - rw)/2;
                // }else{
                //     rx = 0;
                //     rw = res.width;
                //     rh = res.height/220*260;
                //     ry = (res.height - rh)/2;
                // }
                context.drawImage(that.centImg, 0, 0,res.width,res.hight,60,50,150,200)
                context.draw(true)
            }
        })
          let arr=[];
          let count=0;
          let len=Math.ceil((this.title.length*12)/278)
          for(let i=0;i<len;i++){
            if(arr.length!=len){
                arr.push(this.title.substr((0+count)/12,(250+count)/12))
                count+=250;
            }
          }
          let a=0;
           for(let i=0; i<arr.length ;i++){
             context.fillText(`${arr[i]}`,10,270+a);
             a+=20;
           }
          context.save();
          context.setFillStyle('red')
          context.setFontSize(20);
          context.fillText(`￥${this.pice}`,10,425)
          context.setFillStyle('#000')
          context.setFontSize(15)
          context.fillText(`￥${this.newPice}`,100,425)
          context.fillText("长按识别二维码访问",10,450)
          context.drawImage(erWei,0,0,1000,1000,160,340,130,130)
          context.draw()
  },
  onLoad(options){
      let obj=JSON.parse(options.obj);
      this.title=obj.title;
      this.centImg=obj.img;
      this.pice=obj.vipPrice;
      this.newPice=obj.salesPrice;

  }
}
</script>

<style>
canvas{
    border: 1px solid #000;
}
</style>
