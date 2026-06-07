import mongoose from 'mongoose'

const PayslipSchema = new mongoose.Schema({
    employeeId: {type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true},
    date: {type: Date, required: true},
    checkIn: {type: Date, default: null},
    checkOut: {type: Date, default: null},
    status: {type: String, enum: ["PRESENT", "ABSENT", "LEAVE"], default: "PRESENT"},
    workingHours: {type: Number, default: null},
    dayType: {type: String, enum: []}
}, {timestamps: true})

const Payslip = mongoose.models.Payslip || mongoose.model("Payslip", PayslipSchema)

export default Payslip
