
import { createContext, useContext, useState } from "react";
import useLocalstorage from "../Hook/useLocalstorage";
import Swal from 'sweetalert2';
import axios from 'axios'
import toast from "react-hot-toast";

const userContext = createContext()

export const UserProvider = ({ children }) => {
    const [User, setUser, ManualUpdate] = useLocalstorage('User', null)
    // const [basket, SetBasket] = useState(User && User.username ? User.basket : [])

    async function UpdateBasket(basket, id) {
        const res = await axios.put(`http://localhost:4007/user/update-basket/${id}`, { basket })
        console.log(res.data);
    }
   
   

    const addtoBasket = (product) => {
        console.log(User)
        const index = User.basket.findIndex(item => item._id == product._id)
        console.log(index);
        if (index === -1) {
            product.count = 1
            User.basket.push(product)
            ManualUpdate()
            UpdateBasket(User.basket, User._id)
            Swal.fire({
                title: "Are you sure?",
                text: "Want to add to basket?",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, added it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Added!",
                    text: "Your file has been added.",
                    icon: "success"
                  });
                }
              });
            return

            
        }
        User.basket[index].count++
        ManualUpdate()
        UpdateBasket(User.basket, User._id)
        Swal.fire({
            title: "Are you sure?",
            text: "Want to add to basket?",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, added it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Added!",
                text: "Your file has been added.",
                icon: "success"
              });
            }
          });

       
    }

    const DecreaseBtn = (product) => {
        console.log(User.basket)
        const index = User.basket.findIndex(item => item._id == product._id)
        if (User.basket[index].count > 1) {
            console.log(product)
            User.basket[index].count -= 1
            ManualUpdate()
            UpdateBasket(User.basket, User._id)
        }
    }

    const increaseBtn = (product) => {
        const index = User.basket.findIndex(item => item._id == product._id)

        User.basket[index].count += 1
        ManualUpdate()
        UpdateBasket(User.basket, User._id)
    }

    const removeFromBasket = (item) => {
        // const index = User.basket.find(prod => prod._id == item._id)/
        User.basket=User.basket.filter(x=>x._id!=item._id)
        ManualUpdate()
        UpdateBasket(User.basket, User._id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
       
    }

   


    const data = { User, setUser, ManualUpdate, addtoBasket, DecreaseBtn, increaseBtn, removeFromBasket, }

    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = () => useContext(userContext)
