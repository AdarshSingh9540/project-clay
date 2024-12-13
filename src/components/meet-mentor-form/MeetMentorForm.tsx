import FormComponent from "@/components/form/Form"

export default function MeetMentorForm() {
  return (
    <div className=" ">
      <div className="text-center">
        <h1 className="text-xl lg:text-2xl pt-48">
          Find the <span className="font-semibold">Master Shifu</span>{" "}
          <br className="lg:hidden" />
          to your <span className="font-semibold">Kungfu Panda</span>
        </h1>
        <h1 className="text-3xl lg:text-6xl text-black-200 font-bold">
          in 3 easy steps
        </h1>
      </div>
      <FormComponent />
    </div>
  )
}
