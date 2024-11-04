import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().trim().min(1, "이메일은 필수 입력입니다.").email(),
    password: z.string().min(8, "비밀번호는 최소 8글자 이상입니다.")
});

export const registerSchema = z.object({
    name: z.string().trim().min(1, "이름을 1글자 이상 입력하세요"),
    email: z.string().trim().min(1, "이메일은 필수 입력입니다.").email(),
    password: z.string().min(8, "비밀번호는 최소 8글자 이상입니다.")
});

