import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface Photo 
{
  info: {
    count: number,
    pages: number,
    next: string,
    prev: string,
  },
  results: [
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
      episode: [
        string,
      ],
      url: string,
      created: string,
    },
    // ...
  ]
}
  
      
  
      
interface info{
  count: number,
  pages: number,
  next: string,
  prev: string,

}

interface initialType {
  busqueda: string,
    photos: Photo[],
    favoritos: number[],
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
    favoritos: [],
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
        state.favoritos = action.payload},
  },
    extraReducers: (builder) => {
        builder
            .addCase(getPhotos.pending, (state) => {
                state.loading = true
            })
            .addCase(getPhotos.fulfilled, (state, action) => {
                state.loading = false
                state.photos= action.payload
            })
            .addCase(getPag.fulfilled, (state, action) => {
              state.loading = false
              state.photos= action.payload
          })
      
    }
})

export const{actionBusqueda,actionFavorito}=gallerySlice.actions
export default gallerySlice.reducer
