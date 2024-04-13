// import { Inter } from 'next/font/google';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const onValid = (data) => {
    setSubmitted(true);
    setFormData(data);
  };

  const onInvalid = (errors) => {
    setSubmitted(false);
  };

  return (
    <div className="flex justify-center items-center">
      <form
        id="form"
        className=" border-4 border-black border-r-8 rounded-2xl w-[500px] h-[1000px] p-8 flex flex-col  bg-pink-200 font-extrabold"
        onSubmit={handleSubmit(onValid, onInvalid)}
      >
        <div className="flex justify-center items-center mb-8">
          <div className="text-3xl">Job Application Form</div>
        </div>
        <div className="mb-8">
          <div className="mb-2">What department do you want to work for?</div>
          <div>
            <input
              {...register('department')}
              type="radio"
              name="department"
              value="sales"
            />
            <span>Sales</span>
          </div>
          <div>
            <input
              {...register('department')}
              type="radio"
              name="department"
              value="marketing"
            />
            Marketing
          </div>
          <div>
            <input
              {...register('department')}
              type="radio"
              name="department"
              value="according"
            />
            According
          </div>
          <div>
            <input
              {...register('department')}
              type="radio"
              name="department"
              value="customer service"
            />
            Customer Service
          </div>
        </div>

        <div className="mb-8">
          <div className="mb-2">Why do you want to join this company?</div>
          <div>
            <input {...register('why')} type="radio" name="why" value="money" />
            <span>I want money!</span>
          </div>
          <div>
            <input {...register('why')} type="radio" name="why" value="love" />I
            love this company
          </div>
          <div>
            <input {...register('why')} type="radio" name="why" value="learn" />
            I want to learn
          </div>
          <div>
            <input {...register('why')} type="radio" name="why" value="why" />I
            don't know why
          </div>
        </div>

        <div className="w-full mb-4">
          <div className="mb-2">Salary</div>
          <select
            {...register('salary')}
            className="border-4 border-black rounded-md w-full"
          >
            <option value="$50K">$50K</option>
            <option value="$100K">$100K</option>
            <option value="$150K">$150K</option>
            <option value="$200K">$200K</option>
          </select>
        </div>

        <div className="mb-4">
          <div>Intoduce yourself</div>
          <input
            {...register('introduce', {
              required: 'Please write down your introduction',
            })}
            type="text"
            className="border-4 border-black rounded-md w-full"
          />
          <div className="text-red-700">{errors.introduce?.message}</div>
        </div>

        <div className="mb-4">
          <div>Tell us what your dreams are</div>
          <textarea
            {...register('dreams', {
              required: 'Please write down your dreams',
              minLength: {
                message: 'Please write more than 10 characters.',
                value: 10,
              },
            })}
            className="border-4 border-black rounded-md w-full"
          />
          <div className="text-red-700">{errors.dreams?.message}</div>
        </div>

        <div className="mb-4">
          <div>Email</div>
          <input
            {...register('email', {
              required: 'Please write down your email',
              validate: {
                onlyNaver: (value) =>
                  value.includes('@naver') || 'Only @naver is allowed.',
              },
            })}
            type="text"
            className="border-4 border-black rounded-md w-full"
          />
          <div className="text-red-700">{errors.email?.message}</div>
        </div>

        <button className="border-2 border-r-4 border-b-4 border-black h-16 bg-yellow-400 mb-5">
          Give me this job
        </button>
        <div className="w-full break-all">
          {submitted ? ` ${JSON.stringify(formData)}` : ''}
        </div>
      </form>
    </div>
  );
}
