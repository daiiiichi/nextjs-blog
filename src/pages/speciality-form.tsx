import { zodResolver } from "@hookform/resolvers/zod";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";

const schema = z.object({
  postalCode: z
    .string()
    .min(1, { message: "必須項目です" })
    .regex(/^\d{7}$/, { message: "郵便番号は7桁の数字で指定してください" }),
  localSpecialty: z.string().min(1, { message: "必須項目です" }),
  email: z
    .string()
    .min(1, { message: "必須項目です" })
    .email({ message: "有効なメールアドレスを入力してください" }),
});
type Schema = z.infer<typeof schema>;

const SpecialtyForm: NextPage<{}> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data: Schema) => {
    console.log(data);
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="postalCode">郵便番号: </label>
          <input id="postalCode" {...register("postalCode")} />
          <p>{errors.postalCode?.message}</p>
        </div>
        <div>
          <label htmlFor="localSpecialty">特産品: </label>
          <input id="localSpecialty" {...register("localSpecialty")} />
          <p>{errors.localSpecialty?.message}</p>
        </div>
        <div>
          <label htmlFor="email">メールアドレス: </label>
          <input id="email" type="email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <button type="submit">送信</button>
      </form>
      <Link href="/">Back</Link>
    </>
  );
};

export default SpecialtyForm;
