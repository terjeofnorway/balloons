const images = require.context('../../images/', true);

class AssetsController{
    constructor(){
        this.assetLibrary = [
            {handle:'cloud1',url:'images/cloud1.svg',type:'cloud', size:[132,32]},
            {handle:'cloud2',url:'images/cloud2.svg',type:'cloud', size:[109,39]},
            {handle:'cloud3',url:'images/cloud3.svg',type:'cloud', size:[101,27]},
            {handle:'cloud4',url:'images/cloud4.svg',type:'cloud', size:[80,23]},
            {handle:'ground',url:'images/ground.svg',type:'ground', size:[1473,84]},
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