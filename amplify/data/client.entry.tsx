import {defineData} from '@aws-amplify/backend';

import AboutUsComponent from "./components/about";


function MainPage(){
    return(
        {AboutUsComponent}
    );
}

export default MainPage;

/*

export const MainPage = defineData({
    AboutUsComponent
});*/