const images = require.context('../../images/', true);

class AssetsController{
    constructor(){
        this.assetLibrary = [
            {handle:'cloud1',url:'images/cloud1.svg',type:'cloud', size:[330,80], translate:[0,0]},
            {handle:'cloud2',url:'images/cloud2.svg',type:'cloud', size:[272,98], translate:[0,0]},
            {handle:'cloud3',url:'images/cloud3.svg',type:'cloud', size:[250,85], translate:[0,0]},
            {handle:'cloud4',url:'images/cloud4.svg',type:'cloud', size:[200,53], translate:[0,0]},
            {handle:'ground',url:'images/ground.svg',type:'ground', size:[1473,84], translate:[0,0]},
            {handle:'tree1',url:'images/tree1.svg',type:'tree', size:[225,385], translate:[0,0]},
            {handle:'tree2',url:'images/tree2.svg',type:'tree', size:[250,447], translate:[0,0]},
            {handle:'tree3',url:'images/tree3.svg',type:'tree', size:[245,312], translate:[0,0]},
            {handle:'tree4',url:'images/tree4.svg',type:'tree', size:[115,206], translate:[0,0]},
            {handle:'tree5',url:'images/tree5.svg',type:'tree', size:[258,330], translate:[0,0]},
            {handle:'tree6',url:'images/tree6.svg',type:'tree', size:[178,260], translate:[0,0]},
            {handle:'archer_lower',url:'images/archer_lower.svg',type:'archer_lower', size:[132,145], translate:[65,20]},
            {handle:'archer_middle',url:'images/archer_middle.svg',type:'archer_middle', size:[65,75], translate:[32,37]},
            {handle:'archer_upper',url:'images/archer_upper.svg',type:'archer_upper', size:[182,162], translate:[50,90]},
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
