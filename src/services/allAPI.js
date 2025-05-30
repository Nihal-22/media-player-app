
import { commonAPI } from "./commonAPI";
import {server_url} from "./server_url"

//uploadvideoAPI

export const uploadvideoAPI=async(video)=>{
    return await commonAPI('POST',`${server_url}/allVideos`,video)
}

//getAllUploadVideoAPI

export const getAllUploadVideoAPI=async()=>{
    return await commonAPI('GET',`${server_url}/allVideos`,"")
}

//deleteVideoAPI

export const deleteVideoAPI=async(id)=>{
    return await commonAPI('DELETE',`${server_url}/allVideos/${id}`,{})
}

//addHistoryAPI

export const addHistoryAPI=async(video)=>{
    return await commonAPI('POST',`${server_url}/history`,video)
}

//getHistoryAPI

export const getHistoryAPI=async()=>{
    return await commonAPI('GET',`${server_url}/history`,'')
}

//deleteHistoryAPI

export const deleteHistoryAPI=async(id)=>{
    return await commonAPI('DELETE',`${server_url}/history/${id}`,{})
}

//addCategoryAPI

export const addCategoryAPI=async(category)=>{
    return await commonAPI('POST',`${server_url}/category`,category)
}

//getCategoryAPI

export const getCategoryAPI=async()=>{
    return await commonAPI('GET',`${server_url}/category`,"")
}

//deleteCategoryAPI

export const deleteCategoryAPI=async(id)=>{
    return await commonAPI('DELETE',`${server_url}/category/${id}`,{})
}

//getAVideoAPI

export const getAVideoAPI=async(id)=>{
    return await commonAPI('GET',`${server_url}/allVideos/${id}`,"")
}

//updateCategoryAPI

export const updateCategoryAPI=async(id,categoryDetaild)=>{
    return await commonAPI('PUT',`${server_url}/category/${id}`,categoryDetaild)
}