function extractID(url) {
  const match = url.match(/capture\/(.*)/);
  return match ? match[1] : "";
}

function goToDownload(type) {
  const urlInput = document.getElementById("polycam-url");
  const id = extractID(urlInput.value);
  if (id) {
    let baseUrl = "";
    switch (type) {
      case "obj":
        baseUrl += `https://storage.polycam.io/export/${id}/poly.zip`;
        break;
      case "stl":
        baseUrl += `https://storage.polycam.io/export/${id}/poly.stl`;
        break;
      case "glb":
        baseUrl += `https://storage.polycam.io/captures/${id}/raw.glb`;
        break;
      case "dae":
        baseUrl += `https://storage.polycam.io/export/${id}/poly.zip`;
        break;
      case "fbx":
        baseUrl += `https://storage.polycam.io/export/${id}/poly.fbx`;
        break;
      case "las":
        baseUrl += `https://storage.polycam.io/export/${id}/point_cloud.laz`;
        break;
      case "ply":
        baseUrl += `https://storage.polycam.io/export/${id}/point_cloud.ply`;
        break;
      // case "splat_ply":
      //   baseUrl += `https://storage.polycam.io/export/${id}/point_cloud.ply`;
      //   break;
      case "pts":
        baseUrl += `https://storage.polycam.io/export/${id}/point_cloud.pts`;
        break;
      case "xyz":
        baseUrl += `https://storage.polycam.io/export/${id}/point_cloud.xyz`;
        break;
      case "dxf":
        baseUrl += `https://storage.polycam.io/export/${id}/point_cloud.dxf`;
        break;
      case "video":
        baseUrl += `https://storage.polycam.io/captures/${id}/polycam.mp4`;
        break;
      case "images":
        baseUrl += `captures/${id}/session.zip`;
        break;
      case "blueprint":
        baseUrl = `https://poly.cam/api/capture/${id}/export?format=blueprint`;
        break;
    }
    window.open(baseUrl, "_blank");
  } else {
    alert("Please enter a valid Polycam URL.");
  }
}
