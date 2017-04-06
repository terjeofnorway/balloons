const images = require.context('../../images/', true);

class AssetsController{
    constructor(){
        this.assetLibrary = [
            {handle:'cloud1',url:'images/cloud1.svg',type:'cloud', size:[132,32]},
            {handle:'cloud2',url:'images/cloud2.svg',type:'cloud', size:[109,39]},
            {handle:'cloud3',url:'images/cloud3.svg',type:'cloud', size:[101,27]},
            {handle:'cloud4',url:'images/cloud4.svg',type:'cloud', size:[80,23]},
            {handle:'ground',url:'images/ground.svg',type:'ground', size:[1473,84]},
            {handle:'tree1',url:'images/tree1.svg',type:'tree', size:[90,154]},
            {handle:'tree2',url:'images/tree2.svg',type:'tree', size:[101,179]},
            {handle:'tree3',url:'images/tree3.svg',type:'tree', size:[98,125]},
            {handle:'tree4',url:'images/tree4.svg',type:'tree', size:[46,82]},
            {handle:'tree5',url:'images/tree5.svg',type:'tree', size:[103,132]},
            {handle:'tree6',url:'images/tree6.svg',type:'tree', size:[71,104]},
            {handle:'archer_lower',url:'images/archer_lower.svg',type:'archer_lower', size:[53,58]},
            {handle:'archer_middle',url:'images/archer_middle.svg',type:'archer_middle', size:[26,30]},
            {handle:'archer_upper',url:'images/archer_upper.svg',type:'archer_upper', size:[73,65]},
        ];

        this.loadAssets();
    }


    loadAssets(){
        for (let asset of this.assetLibrary){
            asset.promise = fetch(asset.url);
        }

        Promise.all(this.assetLibrary.map(item => item.promise))
            .then(resultArray => {

                let blogPromiseArray = resultArray.map(item => { return item.blob() });

                return Promise.all(blogPromiseArray);
            })
            .then(blogPromiseArray => {

                blogPromiseArray.map((item,index) => {
                    let assetImage = new Image();
                    assetImage.src = URL.createObjectURL(item);
                    this.assetLibrary[index].graphic = assetImage;
                });

                window.dispatchEvent(new Event('ASSETS_LOADED'));
            });

    }

    getFileByHandle(handle){
        return this.assetLibrary.find(item => item.handle === handle);
    }

    getAsset(type){

        const assetSelection = this.assetLibrary.filter(item => item.type === type);


        return assetSelection[Math.floor(Math.random() * assetSelection.length)];
    }
}


export default AssetsController;