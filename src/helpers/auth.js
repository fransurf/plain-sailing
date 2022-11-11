// export const token = 'eyJraWQiOiJKUlY4cHNcL3hka2VuWVMyZkpudXhcL1FYMmhPd1RcL2ZqRTgrSTk1OHErOVQ4PSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiX2tsVlA2OUpsNUVhWFIxNnRGZjEzdyIsInN1YiI6IjI4YmViM2E2LWMzZDMtNGFhNC1iYzEzLTIzYmRhOGY4NDNmYSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9rM3NIcEt4dVQiLCJjb2duaXRvOnVzZXJuYW1lIjoiZ2VvbGxlY3QtdGVjaG5pY2FsLXVzZXIiLCJhdWQiOiI3Z3B0aW0wa2M3NjRsdXFia2Jsb21sMWlzcyIsImV2ZW50X2lkIjoiNzdkZTYyMTgtZDEzYy00NTY5LTgxYmEtOGQ2NDU5NjM4YWNkIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NjgwNzY4OTMsImV4cCI6MTY2ODE2MzI5MywiaWF0IjoxNjY4MDc2ODkzLCJqdGkiOiIyYTIzOTU5ZC1hOTExLTQzNGEtOTk3Ny0yYjhiYTI1OTQyMzYiLCJlbWFpbCI6ImFtYmVyYW1lZXJAZ2VvbGxlY3QuY29tIn0.SoR1ewyP3mdxRqnLipFFHXfcMZ_LidWnmJp8lRa8siiN0y9tkO0PkhpCB_RAXSFi5mxii1DI_gNBpL9FZla3qPCZXIChcTnq7Mey2GTyuK4AmyfugYRgg6vRNASQVlP7cf_EUn38tYmcE0W2wFX5sfEGxupHFu0dALaTOvCVr2GUsFHVTdZxArffQgpmM-PiggH4tdUQJSqSGPSJ18SDNlMVZdlAud7eHZm5srdHFgObUJxE0ysuWxQzN3r2yiHIlUP0mIQs4UqWWiSL4uf2XI8-zaxpfZoIwMKfReF3O7Eh_kxinTG_9QVcyrTb6JV3T3NTVmd57rtRJwFTguYQsQ'

// export const API_URL = `https://zruqk52qub.execute-api.us-east-1.amazonaws.com/v3/`


// const [vessels, setVessels] = useState([])
// const [errors, setErrors] = useState([false])

// useEffect(() => {
//   const getVessels = async () => {

//     try {
//       // console.log('token inside trycatch -->', token)
//       const { data } = await axios.get(`${API_URL}/vessels/positions`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Access-Control-Allow-Origin": "*",
//           "Access-Control-Allow-Methods": "*",
//           "Access-Control-Allow-Headers": "*",
//           "Access-Control-Allow-Credentials": true,
//           "Content-Type": "application/json"
//         },
//       })
//       console.log('vessels data -->', data)
//       setVessels(data)

//     } catch (error) {
//       console.log('🚨 error getting vessels --->', error)
//       setErrors(true)
//     }
//   }
//   getVessels()
// }, [])