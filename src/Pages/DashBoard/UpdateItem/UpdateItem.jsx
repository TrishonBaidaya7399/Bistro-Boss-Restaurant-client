// import PropTypes from 'prop-types';

import { useLoaderData } from "react-router-dom";
import Title from "../../../Components/Title/Title";
import { ImSpoonKnife } from "react-icons/im";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";

// const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
// console.log(img_hosting_key);

const UpdateItem = () => {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  // const axiosPublic = useAxiosPublic();
  const item = useLoaderData();
  console.log(item[0]);
  const { name, category, price, recipe, image, _id } = item[0];
  console.log("Default Name:", name);
  console.log("Default Category:", category);
  console.log("Default Price:", price);
  console.log("Default Recipe:", recipe);
  console.log("Default Image:", image);



  const onSubmit = async (data) => {
    console.log(data);
      setLoading(true);
      const menuItem = {
        name: data.name,
        price: parseInt(data.price),
        category: data.category,
        recipe: data.recipe,
        // image: res.data.data.display_url ? res.data.data.display_url : image,
      };
      console.log(_id);
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        setLoading(false)
        reset();
        Swal.fire({
          imageUrl: image,
          imageHeight: 250,
          imageWidth: 300,
          title: "Updated!",
          text: `Product "${menuItem.name}" updated successfully!`,
          imageAlt: "product image",
        });
        console.log("With image URL: ", menuRes.data);
      }else{
        setLoading(false)
        reset();
        Swal.fire({
          title: "Failed!",
          text: `Please update some information`,
          icon: "error",
          confirmButtonText: "Try Again"
        });
        console.log("With image URL: ", menuRes.data);
      }

  };
  return (
    <div className="bg-white lg:px-[100px] lg:py-4 min-h-screen">
      <Title heading="UPDATE AN ITEM" subHeading="What's update?"></Title>
      <div className="bg-gray-100 rounded-lg p-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body text-gray-700"
        >
          <div className="form-control"></div>
          <div className="form-control flex flex-col lg:flex-row gap-6 w-full">
            <div className="w-full">
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold text-xl font-semibold">
                    Recipe name*
                  </span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Recipe name"
                  id="name"
                  name="name"
                  defaultValue={name}
                  className="input w-full"
                  
                />
              </div>
              <div className="w-[100%]">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold text-xl font-semibold">
                    Category*
                  </span>
                </label>
                <select
                  {...register("category")}
                  id="category"
                  name="category"
                  className=" w-full select"
                  placeholder="Category"
                  defaultValue={category}
                  
                >
                  <option className="text-gray-500" disabled value="default">
                    Category
                  </option>
                  <option className="text-gray-500" value="salad">
                    Salad
                  </option>
                  <option className="text-gray-500" value="pizza">
                    Pizza
                  </option>
                  <option className="text-gray-500" value="soup">
                    Soup
                  </option>
                  <option className="text-gray-500" value="dessert">
                    Dessert
                  </option>
                  <option className="text-gray-500" value="drinks">
                    Drinks
                  </option>
                </select>
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-gray-700 font-semibold text-xl font-semibold">
                    Price*
                  </span>
                </label>
                <input
                  {...register("price")}
                  type="number"
                  placeholder="Price"
                  name="price"
                  defaultValue={price}
                  className="input w-full"
                  
                />
              </div>
            </div>
            <div className="image">
              <div className="w-[300px] h-[250px] border-[5px] border-[#B58130] rounded-lg p-1 bg-white">
                <img src={image} className="w-full h-full rounded-md" alt="" />
              </div>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 font-semibold text-xl font-semibold">
                Recipe Details*
              </span>
            </label>
            <textarea
              {...register("recipe")}
              className="textarea h-40"
              type="text"
              placeholder="Recipe Details"
              name="recipe"
              defaultValue={recipe}
              
            ></textarea>
          </div>
          {/* <div className="form-control mt-2">
            <input
              {...register("image")}
              
              type="file"
              className="file-input w-full max-w-xs rounded-md mt-2 bg-gray-100"
            />
          </div> */}
          <div className="form-control mt-2">
            <button
              type="submit"
              disabled={false}
              className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-lg font-bold text-white w-fit px-8 mt-2 rounded-md"
            >
              {
              loading
              ? <span className="loading loading-dots loading-lg"></span>
              : "Update Item"
              }
              <ImSpoonKnife className="text-lg" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

UpdateItem.propTypes = {};

export default UpdateItem;
