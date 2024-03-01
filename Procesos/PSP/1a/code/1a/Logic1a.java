
import java.util.*;

/**
 * 
 */
public class Logic1a {

    /**
     * Default constructor
     */
    public Logic1a() {
    }

    /**
     * 
     */
    private int n;

    /**
     * 
     */
    private String data;

    /**
     * 
     */
    private String [] arrData;

    /**
     * 
     */
    private double media;

    /**
     * 
     */
    private double desv;

    /**
     * 
     */
    public void logic1a() {
        // TODO implement here
	Input myInput = new Input();
	Data myData = new Data();
	Media myMedia = new Media();
        DesvEst myDesv = new DesvEst();
	OutPut myOut = new OutPut();

	System.out.println("exec logic1a");

	data = myInput.readData("in.txt");
	System.out.println(data);
	arrData = myData.saveData(data);
	System.out.println(arrData);

	n=10; //hard code
	media = myMedia.getMedia(arrData, n);
	System.out.println(media);

	desv = myDesv.getDesvEst(media, arrData, n);
        System.out.println(desv);

	myOut.writeData("out.txt", ""+media);
	myOut.writeData("out.txt",""+desv);

    }

}
