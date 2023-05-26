"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grupo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const carrera_1 = require("./carrera");
let Grupo = class Grupo extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
    })
], Grupo.prototype, "idgrupo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true
    })
], Grupo.prototype, "nombre", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    })
], Grupo.prototype, "carrera_clave", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => carrera_1.Carrera, 'carrera_clave')
], Grupo.prototype, "ILEC", void 0);
Grupo = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: "grupo"
    })
], Grupo);
exports.Grupo = Grupo;
