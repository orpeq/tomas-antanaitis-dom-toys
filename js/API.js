const baseURL = 'http://localhost:3000';

class API {
    
    
    static fetchToys = (success, failure) => {
        fetch(`${baseURL}/toys`)
        .then(res => res.json())
        .then(success)
        .catch(failure)
        
    }

    static deleteToy = (id, success, failure) => {
        fetch(`${baseURL}/toys/${id}`, { method: 'DELETE' })
          .then(res => res.ok ? success () : failure(res.statusText))
          .catch(failure)
      }
}

// API.fetchToys(
//     console.log,
//     console.err
// )

// API.deleteToy(
//     "2",
//     () => console.log('Ištrinta sėkmingai'),
//     console.err
// )