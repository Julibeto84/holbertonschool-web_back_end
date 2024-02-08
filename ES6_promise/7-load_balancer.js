export default function loadBalancer(chinaDownload, USDownload) {
  return Promise
    .race([loadBalancer, USDownload])
    .then((value) => value);
}
