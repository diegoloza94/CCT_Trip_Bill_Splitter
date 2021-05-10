package ie.cct.cwba.CATripBill;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("ie.cct*")
public class CaTripBillApplication {

	public static void main(String[] args) {
		SpringApplication.run(CaTripBillApplication.class, args);
	}

}
