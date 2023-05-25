/*

The Facade pattern is a structural design pattern that 
provides a simplified interface to a complex system of classes, 
subsystems, or APIs. It encapsulates the complexities and interactions of 
the underlying components, allowing clients to interact with the system through 
a unified and straightforward interface.

*/

// Subsystem: User Authentication
class UserAuthentication {
  authenticate(username: string, password: string): boolean {
    // Authenticate user logic
    console.log(`Authenticating user: ${username}`);
    return true;
  }
}

// Subsystem: Movie Catalog
class MovieCatalog {
  getMovieDetails(movieId: string): string {
    // Fetch movie details from catalog
    console.log(`Fetching movie details for movie ID: ${movieId}`);
    return `Movie Title: Avengers, Duration: 2h 30m`;
  }
}

// Subsystem: Payment Processing
class PaymentProcessor {
  processPayment(amount: number): void {
    // Process payment logic
    console.log(`Processing payment: $${amount}`);
    console.log('Payment processed successfully!');
  }
}

// Facade
class MovieStreamingServiceFacade {
  private userAuthentication: UserAuthentication;
  private movieCatalog: MovieCatalog;
  private paymentProcessor: PaymentProcessor;

  constructor() {
    this.userAuthentication = new UserAuthentication();
    this.movieCatalog = new MovieCatalog();
    this.paymentProcessor = new PaymentProcessor();
  }

  watchMovie(
    username: string,
    password: string,
    movieId: string,
    paymentAmount: number
  ): void {
    const isAuthenticated = this.userAuthentication.authenticate(
      username,
      password
    );
    if (isAuthenticated) {
      const movieDetails = this.movieCatalog.getMovieDetails(movieId);
      console.log(`Movie details: ${movieDetails}`);
      this.paymentProcessor.processPayment(paymentAmount);
      console.log('Enjoy your movie!');
    } else {
      console.log('Authentication failed. Please try again.');
    }
  }
}

// usage

const movieStreamingService = new MovieStreamingServiceFacade();
movieStreamingService.watchMovie('user123', 'password', '1234', 10.0);
