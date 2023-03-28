package labmath

func IsPrime(num int) bool {
	if num <= 1 {
		return false
	}

	for i := 2; i <= num/2; i++ {
		if num%i == 0 {
			return false
		}
	}
	return true
}
