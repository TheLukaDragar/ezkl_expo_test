import { Stack, useGlobalSearchParams, useLocalSearchParams, usePathname } from 'expo-router';
import { ReactNode, useEffect } from 'react';



//safe area view
import { SafeAreaProvider } from 'react-native-safe-area-context';







export default function RootLayout(): ReactNode {
  //const isLoadingComplete = useCachedResources();


  const pathname = usePathname();
  const params = useLocalSearchParams();
  const globalParams = useGlobalSearchParams();
  console.log('globalParams', globalParams);




  useEffect(() => {
    console.log('pathname changed', pathname);

    //here we can remeber the last page and redirect to it 


  }, [pathname, params]);




  // if (!isLoadingComplete) {
  //   return <SplashScreen />;
  // } else {
  return (




    <SafeAreaProvider>


      <Stack
        screenOptions={
          {
            headerShown: false,
            animation: "none",

          }
        }

        screenListeners={{

        }}>

        <Stack.Screen name="index"
          options={{
            title: "index",


            headerShown: true,



          }}
        />





      </Stack>



    </SafeAreaProvider>

  );

}


