// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   modules: [],
// };
// const modulesSlice = createSlice({
//   name: "modules",
//   initialState,
//   reducers: {
//     setModules: (state, action) => {
//       state.modules = action.payload;
//     },

//     addModule: (state, { payload: module }) => {
//       const newModule: any = {
//         _id: new Date().getTime().toString(),
//         lessons: [],
//         name: module.name,
//         course: module.course,
//       };
//       state.modules = [...state.modules, newModule] as any;
//     },
//     deleteModule: (state, { payload: moduleId }) => {
//       state.modules = state.modules.filter((m: any) => m._id !== moduleId);
//     },
//     updateModule: (state, { payload: module }) => {
//       state.modules = state.modules.map((m: any) =>
//         m._id === module._id ? module : m
//       ) as any;
//     },
//     editModule: (state, { payload: moduleId }) => {
//       state.modules = state.modules.map((m: any) =>
//         m._id === moduleId ? { ...m, editing: true } : m
//       ) as any;
//     },
//   },
// });

// export const { addModule, deleteModule, updateModule, editModule, setModules } =
//   modulesSlice.actions;

// export default modulesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modules: [],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    // 设置所有模块
    setModules: (state, { payload: modules }) => {
      state.modules = modules;
    },

    // 添加一个新模块
    addModule: (state, { payload: module }) => {
      // 后端返回的模块直接添加
      state.modules = [...state.modules, module] as any;
    },

    // 删除指定模块
    deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter(
        (module: any) => module._id !== moduleId
      );
    },

    // 更新指定模块
    updateModule: (state, { payload: updatedModule }) => {
      state.modules = state.modules.map((module: any) =>
        module._id === updatedModule._id ? updatedModule : module
      ) as any;
    },

    // 设置某个模块为编辑状态
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((module: any) =>
        module._id === moduleId ? { ...module, editing: true } : module
      ) as any;
    },
  },
});

// 导出 action creators
export const { addModule, deleteModule, updateModule, editModule, setModules } =
  modulesSlice.actions;

// 导出 reducer
export default modulesSlice.reducer;
