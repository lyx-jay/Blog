
import fs from 'fs';
import path from 'path';

/**
 * 
 * @param {Object} config sidebar为空的config对象
 * @param {String} rootfolderPath 存放文章的最外层目录
 * @returns Object
 */
const auto_generate_config = function (config, rootfolderPath) {
  const newConfig = JSON.parse(JSON.stringify(config));
  const fileFolderNames = fs.readdirSync(rootfolderPath);
  const folderNames = [];  // 所有文件夹名称

  // 获取根目录下的所有文件夹名称
  fileFolderNames.forEach(item => {
    const location = path.join(rootfolderPath, item);
    const info = fs.statSync(location);
    if (info.isDirectory()) {
      folderNames.push(item);
    }
  })

  // 为每一个文件夹创建sidebar
  folderNames.forEach(folder => {
    newConfig.themeConfig.sidebar.push(
      {
        text: folder,
        collapsed: true,
        collapsible: true,
        items: []
      }
    )
  })

  folderNames.forEach(folder => {
    // 获取子文件夹的路径
    const folderPath = rootfolderPath + '/' + folder;
    // 检测当前子目录下的所有文件
    const files = fs.readdirSync(folderPath);
    files.forEach(file => {
      const name = file;
      const filePath = folderPath + '/' + file;
      // 将文件名和其路径添加到sidebar对应的items中
      newConfig.themeConfig.sidebar.forEach(sidebar => {
        if (sidebar.text === folder) {
          sidebar.items.push({
            text: name.replace(/(.md)$/, ''),
            link: filePath.replace(/(\.)+/, '')
          });
          console.log(sidebar)
          return;
        }
      })
    })
  });

  return newConfig;
}

export default auto_generate_config;