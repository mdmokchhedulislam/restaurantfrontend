/* eslint-disable @typescript-eslint/no-explicit-any */
export const addFood = async (payload: { name: string }) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/food`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    // console.log(result);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

type GetFoodParams = {
  search?: string;
  category?: string;
};

export const getFood = async (params: GetFoodParams = {}) => {
  try {
    const query = new URLSearchParams();

    if (params.search) query.append("search", params.search);
    if (params.category) query.append("category", params.category);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/api/food?${query.toString()}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch foods");
    }

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
