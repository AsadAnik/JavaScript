//About Inherit the data from one class to another class...
class StrockAndroid{

	constructor(brandName, model, cpu, ram, camera){
		this.brandName = brandName;
		this.model = model;
		this.cpu = cpu;
		this.ram = ram;
		this.camera = camera;
	}

	getCpu(){
		console.log(`CPU : SnapDragon 840! ${this.cpu}GHz clock speed!`);
	}

	getRam(){
		console.log(`RAM : ${this.ram}GB`);
	}

	getCamera(){
		console.log(`Camera : Google ${this.camera}MP All!`);
	}
}

	var OnePhone = new StrockAndroid('Google', 'Pixel 4', 2.7, 8, 12);

	console.log(OnePhone.brandName);
	console.log(OnePhone.model);
	OnePhone.getCpu();
	OnePhone.getRam();
	OnePhone.getCamera();

  console.log('\n'); 	

//Extending the values...
class CustomAndroid extends StrockAndroid{

	constructor(brandName, model, cpu, ram, camera, fingerPrint, faceID, cloud){
		super(brandName, model, cpu, ram, camera);

		this.fingerPrint = fingerPrint;
		this.faceID = faceID;
		this.cloud = cloud;
	}

	getFinger(){
		console.log(`Fingerprint Sensor speed ${this.fingerPrint}ms!`);
	}
	getFaceLock(){
		console.log(`FaceID ${this.faceID} ID`);
	}
	getCloudServer(){
		console.log(`Cloud Storage ${this.cloud}GB Free!`);
	}
}

	let AnotherPhone = new CustomAndroid('Samsung', 'X', 2.5, 8, 10, 0.2, 'Google Cloud', 30);

	console.log(AnotherPhone.brandName);
	console.log(AnotherPhone.model);
	AnotherPhone.getCpu();
	AnotherPhone.getRam();
	AnotherPhone.getCamera();
	AnotherPhone.getFinger();
	AnotherPhone.getFaceLock();
	AnotherPhone.getCloudServer();

