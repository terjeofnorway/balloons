const images = require.context('../../images/', true);

class AssetsController{
    constructor(){
        this.assetLibrary = [
            {handle:'cloud1',url:'images/cloud1.svg',type:'svg'},
            {handle:'cloud2',url:'images/cloud2.svg',type:'svg'},
            {handle:'cloud3',url:'images/cloud3.svg',type:'svg'},
            {handle:'cloud4',url:'images/cloud4.svg',type:'svg'},
        ]

        this.loadAssets();
    }


    loadAssets(){
        for (let asset of this.assetLibrary){
            asset.promise = fetch(asset.url);
        }

        Promise.all(this.assetLibrary.map(item => item.promise))
            .then(resultArray => {
                let allAssetsLoaded = resultArray.every(item => {return item.ok === true});
                window.dispatchEvent(new Event('ASSETS_LOADED'));
            });
    }

    getFileByHandle(handle){
        return this.assetLibrary.find(item => item.handle === handle);
    }

    getAsset(type){
        return this.assetLibrary[0];
    }
}


export default AssetsController;