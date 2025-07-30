# Expo 到 React Native 迁移计划

## 需要安装的依赖

```bash
# 导航
npm install @react-navigation/native @react-navigation/stack
npm install react-native-screens react-native-safe-area-context

# 相机和扫码
npm install react-native-vision-camera
npm install react-native-qrcode-scanner

# 图片选择
npm install react-native-image-picker

# 文件系统
npm install react-native-fs

# 渐变背景
npm install react-native-linear-gradient

# 通知
npm install @react-native-push-notification/push-notification-ios react-native-push-notification

# Toast提示
npm install react-native-toast-message

# 权限管理
npm install react-native-permissions
```

## iOS 额外配置

需要在 `ios/Podfile` 中添加权限配置，并运行 `cd ios && pod install`

## Android 额外配置

需要在 `android/app/src/main/AndroidManifest.xml` 中添加权限配置

## 主要文件修改清单

### 1. 路由相关文件

- [ ] `app/login.tsx` - 替换 `expo-router` 为 `@react-navigation`
- [ ] `app/menus.tsx` - 替换路由导航
- [ ] 所有页面文件 - 替换 `useRouter` 和路由跳转

### 2. 相机相关组件

- [ ] `app/components/ScanModal.tsx` - 替换 `expo-camera`
- [ ] `app/components/FaceRecognition.tsx` - 替换相机组件
- [ ] `app/components/Characteristics.tsx` - 替换相机权限

### 3. 其他功能

- [ ] `app/pages/productIn/new.tsx` - 替换图片选择和文件系统
- [ ] `app/login.tsx` - 替换通知和字体加载
- [ ] 所有使用 `LinearGradient` 的文件

## 字体配置

需要创建 `react-native.config.js` 文件配置字体路径

## 权限配置

需要在原生配置中添加相机、存储等权限

## 安装步骤

1. 安装依赖：

```bash
npm install
```

2. iOS 配置：

```bash
cd ios && pod install
```

3. 链接字体资源：

```bash
npx react-native link
```

4. 添加权限配置：
   - Android: 将 `android/app/src/main/AndroidManifest_permissions.xml` 中的权限添加到 `AndroidManifest.xml`
   - iOS: 将 `ios/Info_plist_permissions.txt` 中的权限添加到 `Info.plist`

## 已创建的替换文件

- `app/components/ScanModal_RN.tsx` - 替换 expo-camera 的扫码组件
- `app/navigation/AppNavigator.tsx` - React Navigation 导航配置
- `app/login_RN.tsx` - 替换 expo-router 的登录页面
- `app/menus_RN.tsx` - 替换 expo-router 的菜单页面
- `react-native.config.js` - 字体配置文件

## 使用新组件

1. 将 `App.tsx` 或 `index.js` 中的根组件替换为 `AppNavigator`
2. 将原有的 `ScanModal` 替换为 `ScanModal_RN`
3. 将原有的路由页面替换为新的导航版本

## 注意事项

- 所有页面组件需要将 `useRouter` 替换为 `useNavigation`
- 路由跳转方法从 `router.push()` 改为 `navigation.navigate()`
- 字体加载方式已改变，需要重新配置
- 通知 API 已替换，需要测试功能是否正常
- 相机组件 API 有所不同，需要适配新的权限管理方式
- 图片选择器的 API 调用方式需要更新
- 文件系统操作的 API 需要替换

## 已完成的引用替换

### 1. ScanModal 组件引用替换

已将以下文件中的 `ScanModal` 引用替换为 `ScanModal_RN`：

- ✅ `app/pages/productIn/index.tsx`
- ✅ `app/pages/productOut/detail.tsx`
- ✅ `app/pages/productTransfer/index.tsx`
- ✅ `app/pages/stock/index.tsx`

### 2. 路由相关替换

已将以下文件中的路由引用替换：

- ✅ `expo-router` → `@react-navigation/native`
- ✅ `useRouter` → `useNavigation`
- ✅ `useLocalSearchParams` → `useRoute`
- ✅ `router.push()` → `navigation.navigate()`
- ✅ `router.replace()` → `navigation.navigate()`
- ✅ `router.back()` → `navigation.goBack()`

### 3. LinearGradient 组件替换

已将以下文件中的渐变组件替换：

- ✅ `expo-linear-gradient` → `react-native-linear-gradient`

### 4. 导航配置更新

已更新 `app/navigation/AppNavigator.tsx`：

- ✅ 引用了 `login_RN.tsx` 和 `menus_RN.tsx`
- ✅ 添加了所有子页面的路由配置
- ✅ 配置了正确的页面名称映射

## 下一步需要处理的文件

还需要检查和更新以下类型的文件：

- [ ] 其他使用 `expo-router` 的页面文件
- [ ] 使用 `expo-linear-gradient` 的页面
- [ ] 使用 `expo-notifications` 的文件
- [ ] 使用 `expo-image-picker` 的文件
- [ ] 使用 `expo-file-system` 的文件

## 测试建议

1. 先安装所有依赖：`npm install`
2. 配置原生权限
3. 测试扫码功能是否正常
4. 测试页面导航是否正常
5. 测试通知功能是否正常
