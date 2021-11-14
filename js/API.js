const baseURL = 'http://localhost:3000';

class API {
    
    
    static fetchToys = (success, failure) => {
        setTimeout(() => {
        fetch(`${baseURL}/toys`)
        .then(res => res.json())
        .then(success)
        .catch(failure)
        }, 1000);
    }

    static deleteToy = (id, success, failure) => {
        fetch(`${baseURL}/toys/${id}`, { method: 'DELETE' })
          .then(res => res.json())
          .then(success)
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