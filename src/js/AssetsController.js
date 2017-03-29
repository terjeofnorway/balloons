const images = require.context('../images/', true);

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
            asset.promise.then(item => item.blob()).then(item => {

            });
        }
    }

    getFileByHandle(handle){
        return this.assetLibrary.find(item => item.handle === handle);
    }
}


export default AssetsController;