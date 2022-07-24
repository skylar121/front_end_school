<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <form>
    <label htmlFor="profile-upload" />
    <input type="file" id="profile-upload" accept="image/*" onChange={onChangeImg}/>
  </form>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script>
    // 1. 이미지 확인하기
    const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      
      if(e.target.files){
        const uploadFile = e.target.files[0]
        console.log(uploadFile)
      }
    }

    // 2. formdata객체 만들기
    const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      
      if(e.target.files){
        const uploadFile = e.target.files[0]
        const formData = new FormData()
        formData.append('files',uploadFile)
      }
    }

    // 3. 서버로 전송하기
    const onChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      
      if(e.target.files){
        const uploadFile = e.target.files[0]
        const formData = new FormData()
        formData.append('files',uploadFile)
        
        await axios({
          method: 'post',
          url: '/api/files/images',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
    }
  </script>
</body>
</html>