// import PropTypes from 'prop-types';
import { ImSpoonKnife } from "react-icons/im";
import Title from "../../../Components/Title/Title";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`


const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async(data) => {
    console.log(data);
    //img upload to imgbb and get an url
    //don't use axiosSecure, as we are not going to verify the img before uploading on imgbb
    const imageFile = {image:data.image[0]}
    const res = await axiosPublic.post(img_hosting_api, imageFile, {
        headers: {
            "content-type":  "multipart/form-data"
        }
    })
    console.log(res.data);
    if(res.data.success){
        //now send the menu item data with the image url
        const menuItem ={
            name: data.name,
            price: parseFloat(data.price),
            category: data.category,
            recipe: data.recipe,
            image: res.data.data.display_url
        }
        const menuRes = await axiosSecure.post("/menu", menuItem)
        console.log(menuRes.data);
        if(menuRes.data.insertedId){
            reset();
            Swal.fire({
                imageUrl: menuItem.image,
                imageHeight: 250,
                imageWidth: 300,
                title: "Added!",
                text: `New product "${menuItem.name}" added to the "${menuItem.category}" category`,
                imageAlt: "product image"
              });
              console.log("With image URL: ", menuRes.data);  
        }
    }
};
  //   const loading = false;
  return (
    <div className="bg-white lg:px-[100px] lg:py-4 min-h-screen">
      <Title heading="ADD AN ITEM" subHeading="What's new?"></Title>
      <div className="bg-gray-100 rounded-lg p-2 md:p-6 lg:p-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body text-gray-700"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 font-semibold">
                Recipe name*
              </span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe name"
              id="name"
              name="name"
              className="input"
              required
            />
          </div>
          <div className="form-control flex flex-col lg:flex-row gap-6 w-full">
            <div className="w-[100%]">
              <label className="label">
                <span className="label-text text-gray-700 font-semibold">
                  Category*
                </span>
              </label>
              <select
                {...register("category", { required: true })}
                id="category"
                name="category"
                className=" w-full select"
                placeholder="Category"
                defaultValue={"default"}
                required
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
                <span className="label-text text-gray-700 font-semibold">
                  Price*
                </span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                name="price"
                className="input w-full"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 font-semibold">
                Recipe Details*
              </span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea h-40"
              type="text"
              placeholder="Recipe Details"
              name="recipe"
              required
            ></textarea>
          </div>
          <div className="form-control mt-2">
            <input
              {...register("image", { required: true })}
              required
              type="file"
              className="file-input w-full max-w-xs rounded-md mt-2 bg-gray-100"
            />
          </div>
          <div className="form-control mt-2">
            <button
              type="submit"
              disabled={false}
              className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-lg font-bold text-white w-fit px-8 mt-2 rounded-md"
            >
              Add Item
              <ImSpoonKnife className="text-lg" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddItems.propTypes = {};

export default AddItems;
