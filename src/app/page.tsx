import Image from 'next/image';
import Pagina from './components/template/Pagina';


export default function Home() {
  return  <Pagina>
            <div className='flex justify-center py-20'>
                <h1 className='text-4xl'>Bem-vindo</h1>
            </div>
          </Pagina>
}
