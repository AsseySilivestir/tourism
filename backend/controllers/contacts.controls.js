const contact = require("./../models/contacts")

const createContact = async (req,res)=>{
try{
//receive data from client and destructure..
const {name, email, phone, tour, message} = req.body

// Log the received data to debug
console.log("Received form data:", { name, email, phone, tour, message });


//save user contact data to db
const newContact = await contact.create(
    {
        fullname:name,
        email:email,
        phone:phone,
        tour:tour,
        message:message
    }
)

//dispay upon successfully saving data
console.log(`Contact saved successfully, ${newContact.fullname}`)

//Send a success response to the client
res.status(201).json({
            message: 'Contact saved successfully!',
            data: newContact.fullname // Optionally send back the created data
        })

}catch(error){
    console.error(`Error saving contact \n ${error.message}`)

    // Send a generic 500 Internal Server Error response to the client
        res.status(500).json({ 
            message: 'An internal server error occurred. Please try again later.' 
        })
}
}


module.exports = {createContact}; 