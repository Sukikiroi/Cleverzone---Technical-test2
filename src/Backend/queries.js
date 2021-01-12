const db = require('./Db-Config')


const getAgencies = (request, response) => {
  db.pooldb.query('SELECT "NameAgence", "Address", "Wilaya", "Commune", "Phone", "Created At" FROM public."Agencies" ', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  const getUsers = (request, response) => {
    db.pooldb.query('SELECT * FROM public."Users" ORDER BY id ASC ', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    }




      const createAgence = (request, response) => {
        const  NameAgence  = request.body.NameAgence
        const Address= request.body.Address
        const Wilaya= request.body.Wilaya
        const  Commune= request.body.Commune
        const  Phone= request.body.Phone
       
    console.log(Phone) 
    
     db.pooldb.query(' INSERT INTO public."Agencies"("NameAgence", "Address", "Wilaya", "Commune", "Phone", "Created At") VALUES ($1, $2, $3, $4, $5, 1254)', [NameAgence, Address,Wilaya,Commune,Phone], (error, results) => {

     
     if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.insertId}`)
    })
  }





    const BedlUser = (request, response) => {
    // const id = parseInt(request.params.id)
    const  NameAgence  = request.body.NameAgence
    const Address= request.body.Address
    const Wilaya= request.body.Wilaya
    const  Commune= request.body.Commune
    const  Phone= request.body.Phone

  console.log(Address)

  response.status(200).send('tbedl')
    // db.pooldb.query(
    //   'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    //   [name, email, id],
    //   (error, results) => {
    //     if (error) {
    //       throw error
    //     }
    //     response.status(200).send(`User modified with ID: ${id}`)
    //   }
    // )
  }

// const getUsers = (request, response) => {
//   db.pooldb.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
//   }
//   const getUserById = (request, response) => {
//     const id = parseInt(request.params.id)
  
//     db.pooldb.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
//   }
  
//   const createUser = (request, response) => {
//     const { name, email } = request.body
  
//     db.pooldb.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(201).send(`User added with ID: ${result.insertId}`)
//     })
//   }
  
//   const updateUser = (request, response) => {
//     const id = parseInt(request.params.id)
//     const { name, email } = request.body
  
//     db.pooldb.query(
//       'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//       [name, email, id],
//       (error, results) => {
//         if (error) {
//           throw error
//         }
//         response.status(200).send(`User modified with ID: ${id}`)
//       }
//     )
//   }
  
//   const deleteUser = (request, response) => {
//     const id = parseInt(request.params.id)
  
//     db.pooldb.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User deleted with ID: ${id}`)
//     })
//   }
  
  module.exports = {
    getUsers,
    // getUserById,
    // createUser,
    // updateUser,
    // deleteUser,
    BedlUser,
    createAgence,
    getAgencies,
  }