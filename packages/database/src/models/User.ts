import mongoose, { Schema, Document } from 'mongoose';
import bcryptjs from 'bcryptjs';

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  role: 'student' | 'teacher' | 'admin';
  avatar?: string;
  institutionId?: mongoose.Types.ObjectId;
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, enum: ['student', 'teacher', 'admin'], default: 'student' },
    avatar: String,
    institutionId: { type: Schema.Types.ObjectId, ref: 'Institution' },
    isEmailVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcryptjs.hash(this.password, 10);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function (password: string) {
  return bcryptjs.compare(password, this.password);
};

export const User = mongoose.model<IUser>('User', userSchema);
