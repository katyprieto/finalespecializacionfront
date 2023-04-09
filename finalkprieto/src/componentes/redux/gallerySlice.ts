import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"






export interface Photo 
{
      id: number,
      name: string,
      status: string,
      species: string,
      type: string,
      gender: string,
      origin: {
        name: string,
        url: string,
      },
      location: {
        name: string,
        url: string,
      },
      image: string,
      episode: string[],
      url: string,
      created: string;
    }
 
  
interface info{
    count: number,
    pages: number,
    next: string,
    prev: string;
  }    
  
      
interface info{
  count: number,
  pages: number,
  next: string,
  prev: string,

}

export interface episodio{
  id:number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string,
  },
  location: {
    name: string,
    url: string,
  },
  image: string,
episode:string [],
  url: string,
  created: string,
} 

interface initialType {
  busqueda: string,
    photos: Photo[],
    episodio:episodio,
    info: info,
    favoritos: number[],
    detalle:number[],
    loading: boolean
}

export const getPhotos = createAsyncThunk(
    '/getPhotos',
    async (name: string) => {
        //const res = await fetch(`https://rickandmortyapi.com/api/character/[${num},${num+1},${num+2},${num+3}]`)
       const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        const parseRes = await res.json()
        return parseRes
    }
)

export const getPag = createAsyncThunk(
  '/getPag',
  async (url: string) => {
     const response = await fetch(url)
      const data = await response.json()
      return data
  }
)








const initialState: initialType = {
    busqueda: '',
    photos: [],
    episodio:{
      id: 0,
      name: "",
      status:"",
      species: "",
      type: "",
      gender: "",
      origin: {
        name: "",
        url: "",
      },
      location: {
        name: "",
        url: "",
      },
      image: "",
    episode:[],
      url: "",
      created: "",
    } ,
    info: {count: 0,
        pages: 1,
        next: "",
        prev: "",},
    favoritos: [],
    detalle:[],
    loading: false,
}

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
      actionBusqueda: (state, action) => {
        state.busqueda = action.payload
    },
      actionFavorito:(state, action) => {
        state.favoritos = action.payload
      },
      actionDetalle:(state, action) => {
        state.detalle = action.payload
      }, 
      actionResetFavorito:(state, action) => {
        state.favoritos = []
      },
        
  },
    extraReducers: (builder) => {
        builder
            .addCase(getPhotos.pending, (state) => {
                state.loading = true
            })
            .addCase(getPag.pending, (state) => {
                state.loading = true
            })
            .addCase(getPhotos.fulfilled, (state, action) => {
                state.loading = false
                state.photos= action.payload.results
                state.info=action.payload.info
            })
            .addCase(getPag.fulfilled, (state, action) => {
              state.loading = false
              state.photos= action.payload.results
                state.info=action.payload.info
          })
          .addCase(getPhotos.rejected, (state, action) => {
            state.loading = false
    
        })
        .addCase(getPag.rejected, (state, action) => {
            state.loading = false
    
        })
       
    }
})

export const{actionBusqueda,actionFavorito,actionDetalle,actionResetFavorito}=gallerySlice.actions

export default gallerySlice.reducer
