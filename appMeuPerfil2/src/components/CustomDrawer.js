import React from 'react';
import { View, Text, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props){
    let img = 'https://lh3.googleusercontent.com/wqBAL12FsznVwRrcCYyeXxy4w2CN3_KqXcxM3g5DsiUGtD7XI-xkBeXi44_TN44Xg5F15BAFehzvAOC8jeyY4kK8ZhKA0WBUxGb-bGKTWEvfQ7KSPWAg9G8a7iPiSf44Bu53AgFy9VRGEZ8XwyD2lsWBWHiNw1KKMWGY8-OgCW9-cc9q4sorg4UsMwEZZI-7GkPwchRxD2MRFj7b38JjTxG4FC3q5JXj6r_GgVA8AJm-uh-SyDUm_z7XrP8LJ9vlEwxMQO-5Hu7pbJ9EET10SJ5tBd25AGMe6f2xZWNdCtd0rfTp5SCMXtA7vBUktrg5EpXkd1jNFkPVHhoCy3oB-KncPuATNGNZlylpS0BqosINLgaVcJrVIYNRgOkrDgiyOf9H2ZNDYT3gLTf_l6_E2gIuS8itmPWMUP4XmA4Sg2nSskTseN6eLpODmQIo5sWOoJH36n90ujiNd4Kkh2MBJC4OiDCsgNt1DjP8EQhW5agByo0FKWNOdZfgqnGVq1x-RaaRv1mZKRVjyrRhZXfi0FBJkJj8XVUOd1wGTDqjWaTDG5EZyTgjnMg2kA-gzt9AmwSTg0DJbPL5XAq6KdDnSOLKh93rjQLQ0GwFvMDXt7D2s3KoqPriqDh-WyypoGsNxg9F-Y5GuXY3nxAu9EoN_cM4xs0ONcPKZBRMLQsk3QvU4UfoIY5Zx6hkpX8mRgEyycPfz-jWD0utaU0CJFJy_80Lyg=s637-no?authuser=0'
    return(
        <DrawerContentScrollView {...props}>
            <View style={{width: '100%', height: 77, alignItems: 'center', justifyContent: 'center',marginTop: 25}}>
                <Image 
                source={{uri: img}}
                style={{width: 75, height: 75, borderRadius: 100, borderWidth: 2, borderColor: "#90f"}}
                />
                <Text style={{color:'#000', fontSize: 17, marginTop: 10, marginBottom: 25}}>
                    Weslley Henrique dos Santos
                </Text>
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}