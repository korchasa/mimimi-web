var images = document.images;
var new_images = [
	'4da879f2-44bd-42e6-b862-3473aadb4b29', 'eab324f3-1bbb-4623-967a-2be4a9af9abc',
	'b0ea2264-6537-4d64-81a0-884facb8cbdb', '62b7b6ff-214d-436d-b773-d5660874adb1',
	'95ea6392-201d-4eac-b7c3-a2c3b5cf9f02', '76bf08a6-f032-4e02-a7bf-f374e84c812d',
	'9ee8848f-4bae-4c14-8c5e-6273ddd11ed5', 'a5299ea6-9d9a-4bd7-95fc-8d5049fc1220',
	'f00ce3af-774d-47e2-bca4-28447644a03e', '6aa181ef-5752-4131-a570-f8534a787028',
	'0ca70512-f948-4cbb-a76f-db5278e56aad',	'a8661712-9b1a-49ed-9d40-2a92b330e5a3',
	'4a4e5f16-fd76-4d7c-b5f7-686339e26737', '20455d83-e9a7-43b0-aa21-9f0ed9207cbf',
	'544edc2b-da12-4062-9f1a-ce14a1a6e787', 'db6d5909-c76f-4954-8887-ab373ae2c564',
	'75ea4ddb-d868-4cb6-b4cf-4805c94f99f5', '0cba1b95-4083-420b-b5b1-1424baef9bac',
	'38f90eff-14b2-44ec-80df-3f83fa49f721', 'b0af3c66-c452-48b1-94ef-f333e86fa5e4',
	'f32fb24b-df82-4870-b016-d8741478bae3', '1e56239b-886d-4929-bb17-107183353448',
	'56fa0eac-c272-410f-b27f-eb354ff7d250', '9541c249-1826-4848-a538-5a3ebf584cba'
];
for (var i = 0; i < images.length; i++) {
    var img = images[i];
    if(img.clientWidth < 64 || img.clientHeight < 64)
    	continue;
    var src = 'http://www.ucarecdn.com/' + new_images[i % new_images.length] + '/-/scale_crop/'
    src = src + img.clientWidth + 'x' + img.clientHeight + '/center/';
    img.src = src;
}