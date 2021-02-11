import S3 from "react-aws-s3";

const reactS3 = new S3({
  bucketName: process.env.REACT_APP_AWS_S3_BUCKET,
  region: process.env.REACT_APP_AWS_S3_REGION,
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_ACCESS_KEY_SECRET,
});

export default reactS3;
