const profile = {
  name: "Victor",
  age: 20,
  coords: {
    lat: 10,
    lng: 20,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile; // const age = profile.age;
// const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
