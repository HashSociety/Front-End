import React, { useEffect } from 'react';
import "./App.css"
import GenerateGraph from './components/GenerateGraph';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const App = () => {

  const pcap = [
    ['4c:34:88:90:77:48', '12:89:01:e1:70:8b', '02:66:bf:8b:1a:bb'],
    ['12:89:01:e1:70:8b', '12:89:01:e1:70:8b', '4c:34:88:90:77:48'],
    ['12:89:01:e1:70:8b', '02:66:bf:8b:1a:bb', '12:89:01:e1:70:8b'],
    ['12:89:01:e1:70:8b', '02:66:bf:8b:1a:bb', '12:89:01:e1:70:8b'],
    ['12:89:01:e1:70:8b', '02:66:bf:8b:1a:bb', '12:89:01:e1:70:8b'],
    ['12:89:01:e1:70:8b', '12:89:01:e1:70:8b', '4c:34:88:90:77:48'],
    ['33:33:00:00:00:16', '4c:34:88:90:77:48', '12:89:01:e1:70:8b'],
    ['01:00:5e:00:00:16', '4c:34:88:90:77:48', '12:89:01:e1:70:8b'],
    ['4c:34:88:90:77:48', '12:89:01:e1:70:8b', '33:33:ff:d8:8f:75'],
    ['12:89:01:e1:70:8b', '12:89:01:e1:70:8b', '4c:34:88:90:77:48'],
    ['12:89:01:e1:70:8b', '12:89:01:e1:70:8b', '4c:34:88:90:77:48'],
    ['12:89:01:e1:70:8b', '02:66:bf:8b:1a:bb', '12:89:01:e1:70:8b'],
    ['12:89:01:e1:70:8b', '4c:34:88:90:77:48', '12:89:01:e1:70:8b'],
    ['12:89:01:e1:70:8b', '12:89:01:e1:70:8b', '4c:34:88:90:77:48'],
    ['12:89:01:e1:70:8b', '12:89:01:e1:70:8b', '4c:34:88:90:77:48'],
    ['4c:34:88:90:77:48', '02:66:bf:8b:1a:bb', '12:89:01:e1:70:8b'],
    ['02:66:bf:8b:1a:bb', '12:89:01:e1:70:8b', '4c:34:88:90:77:48'],
    ['12:89:01:e1:70:8b', '4c:34:88:90:77:48', '12:89:01:e1:70:8b'],
    ['12:89:01:e1:70:8b', '4c:34:88:90:77:48', '12:89:01:e1:70:8b'],
  ]



  return (

    
    <QueryClientProvider client={queryClient}>
      <div className=' h-screen w-screen flex justify-center items-center flex-col gap-10'>
        <div className='font-bold text-3xl' >Mesh Hawk</div>
        <GenerateGraph pcap={pcap} />
      </div>
    </QueryClientProvider>

  );
};

export default App;
