"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMedicalsCrudDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_medicals_crud_dto_1 = require("./create-medicals-crud.dto");
class UpdateMedicalsCrudDto extends (0, mapped_types_1.PartialType)(create_medicals_crud_dto_1.CreateMedicalsCrudDto) {
}
exports.UpdateMedicalsCrudDto = UpdateMedicalsCrudDto;
//# sourceMappingURL=update-medicals-crud.dto.js.map