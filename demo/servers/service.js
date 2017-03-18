import {tools} from 'yrui';

const $fetch=tools.$fetch;

export const test=()=>{
	$fetch.get('/test11').then((data)=>{
		console.log(data);
		return data;
	}).catch((error)=>{
		console.log(error);
		return error;
	});
};
export const getInfo=()=>{
	$fetch.get('/user/info').then((data)=>{
		console.log(data);
		return data;
	}).catch((error)=>{
		console.log(error);
		return error;
	});
};


