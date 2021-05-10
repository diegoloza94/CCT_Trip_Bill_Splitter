package ie.cct.cwba.CCTTripBillSplitter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("ie.cct*")
public class CctTripBillSplitterApplication {

	public static void main(String[] args) {
		SpringApplication.run(CctTripBillSplitterApplication.class, args);
	}

}
